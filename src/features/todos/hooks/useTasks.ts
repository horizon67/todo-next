import { useCallback, useEffect, useState } from 'react';

import type { Task, TaskRequest } from '../../../../openapi/types/api';
import { TasksApi } from '../../../../openapi/types/api';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const apiClient = new TasksApi();

  const fetchTasks = useCallback(async () => {
    try {
      const response = await apiClient.todoPhoenixWebTaskControllerIndex();
      const tasksResponse = response.data;
      setTasks(tasksResponse?.data || []);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }, []);

  const createTask = useCallback(
    async (content: string) => {
      try {
        const taskRequest: TaskRequest = {
          task: {
            content,
          },
        };

        await apiClient.todoPhoenixWebTaskControllerCreate(taskRequest);
        fetchTasks();
      } catch (error) {
        console.error('Error creating task:', error);
      }
    },
    [fetchTasks]
  );

  const deleteTask = useCallback(async (id: number) => {
    try {
      await apiClient.todoPhoenixWebTaskControllerDelete(id);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return { tasks, createTask, fetchTasks, deleteTask };
}
