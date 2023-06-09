/* tslint:disable */
/* eslint-disable */
/**
 * My TODO App
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface BadRequest
 */
export interface BadRequest {
    /**
     * 
     * @type {Array<BadRequestErrorsInner>}
     * @memberof BadRequest
     */
    'errors'?: Array<BadRequestErrorsInner>;
}
/**
 * 
 * @export
 * @interface BadRequestErrorsInner
 */
export interface BadRequestErrorsInner {
    /**
     * 
     * @type {string}
     * @memberof BadRequestErrorsInner
     */
    'detail'?: string;
    /**
     * 
     * @type {string}
     * @memberof BadRequestErrorsInner
     */
    'title'?: string;
}
/**
 * A task of the todo
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * Content
     * @type {string}
     * @memberof Task
     */
    'content': string;
    /**
     * Task ID
     * @type {number}
     * @memberof Task
     */
    'id'?: number;
    /**
     * Creation timestamp
     * @type {string}
     * @memberof Task
     */
    'inserted_at'?: string;
    /**
     * State
     * @type {string}
     * @memberof Task
     */
    'state'?: TaskStateEnum;
    /**
     * Update timestamp
     * @type {string}
     * @memberof Task
     */
    'updated_at'?: string;
}

export const TaskStateEnum = {
    New: 'new',
    Doing: 'doing',
    Done: 'done'
} as const;

export type TaskStateEnum = typeof TaskStateEnum[keyof typeof TaskStateEnum];

/**
 * POST body for creating a task
 * @export
 * @interface TaskRequest
 */
export interface TaskRequest {
    /**
     * 
     * @type {Task}
     * @memberof TaskRequest
     */
    'task': Task;
}
/**
 * Response schema for single task
 * @export
 * @interface TaskResponse
 */
export interface TaskResponse {
    /**
     * 
     * @type {Task}
     * @memberof TaskResponse
     */
    'data'?: Task;
}
/**
 * Response schema for multiple tasks
 * @export
 * @interface TasksResponse
 */
export interface TasksResponse {
    /**
     * The tasks details
     * @type {Array<Task>}
     * @memberof TasksResponse
     */
    'data'?: Array<Task>;
}

/**
 * TasksApi - axios parameter creator
 * @export
 */
export const TasksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a task (this block of text becomes the operation\'s `description`)
         * @summary Create task (this line becomes the operation\'s `summary`)
         * @param {TaskRequest} taskRequest The task attributes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoPhoenixWebTaskControllerCreate: async (taskRequest: TaskRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskRequest' is not null or undefined
            assertParamExists('todoPhoenixWebTaskControllerCreate', 'taskRequest', taskRequest)
            const localVarPath = `/api/tasks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(taskRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete task
         * @param {number} id Task ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoPhoenixWebTaskControllerDelete: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('todoPhoenixWebTaskControllerDelete', 'id', id)
            const localVarPath = `/api/tasks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all tasks
         * @summary List tasks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoPhoenixWebTaskControllerIndex: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/tasks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update task
         * @param {number} id Task ID
         * @param {TaskRequest} taskRequest Task params
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoPhoenixWebTaskControllerUpdate: async (id: number, taskRequest: TaskRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('todoPhoenixWebTaskControllerUpdate', 'id', id)
            // verify required parameter 'taskRequest' is not null or undefined
            assertParamExists('todoPhoenixWebTaskControllerUpdate', 'taskRequest', taskRequest)
            const localVarPath = `/api/tasks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(taskRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update task
         * @param {number} id Task ID
         * @param {TaskRequest} taskRequest Task params
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoPhoenixWebTaskControllerUpdate2: async (id: number, taskRequest: TaskRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('todoPhoenixWebTaskControllerUpdate2', 'id', id)
            // verify required parameter 'taskRequest' is not null or undefined
            assertParamExists('todoPhoenixWebTaskControllerUpdate2', 'taskRequest', taskRequest)
            const localVarPath = `/api/tasks/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(taskRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TasksApi - functional programming interface
 * @export
 */
export const TasksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TasksApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a task (this block of text becomes the operation\'s `description`)
         * @summary Create task (this line becomes the operation\'s `summary`)
         * @param {TaskRequest} taskRequest The task attributes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoPhoenixWebTaskControllerCreate(taskRequest: TaskRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todoPhoenixWebTaskControllerCreate(taskRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete task
         * @param {number} id Task ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoPhoenixWebTaskControllerDelete(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todoPhoenixWebTaskControllerDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all tasks
         * @summary List tasks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoPhoenixWebTaskControllerIndex(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TasksResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todoPhoenixWebTaskControllerIndex(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update task
         * @param {number} id Task ID
         * @param {TaskRequest} taskRequest Task params
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoPhoenixWebTaskControllerUpdate(id: number, taskRequest: TaskRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todoPhoenixWebTaskControllerUpdate(id, taskRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update task
         * @param {number} id Task ID
         * @param {TaskRequest} taskRequest Task params
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async todoPhoenixWebTaskControllerUpdate2(id: number, taskRequest: TaskRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.todoPhoenixWebTaskControllerUpdate2(id, taskRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TasksApi - factory interface
 * @export
 */
export const TasksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TasksApiFp(configuration)
    return {
        /**
         * Create a task (this block of text becomes the operation\'s `description`)
         * @summary Create task (this line becomes the operation\'s `summary`)
         * @param {TaskRequest} taskRequest The task attributes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoPhoenixWebTaskControllerCreate(taskRequest: TaskRequest, options?: any): AxiosPromise<TaskResponse> {
            return localVarFp.todoPhoenixWebTaskControllerCreate(taskRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete task
         * @param {number} id Task ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoPhoenixWebTaskControllerDelete(id: number, options?: any): AxiosPromise<object> {
            return localVarFp.todoPhoenixWebTaskControllerDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * List all tasks
         * @summary List tasks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoPhoenixWebTaskControllerIndex(options?: any): AxiosPromise<TasksResponse> {
            return localVarFp.todoPhoenixWebTaskControllerIndex(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update task
         * @param {number} id Task ID
         * @param {TaskRequest} taskRequest Task params
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoPhoenixWebTaskControllerUpdate(id: number, taskRequest: TaskRequest, options?: any): AxiosPromise<TaskResponse> {
            return localVarFp.todoPhoenixWebTaskControllerUpdate(id, taskRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update task
         * @param {number} id Task ID
         * @param {TaskRequest} taskRequest Task params
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        todoPhoenixWebTaskControllerUpdate2(id: number, taskRequest: TaskRequest, options?: any): AxiosPromise<TaskResponse> {
            return localVarFp.todoPhoenixWebTaskControllerUpdate2(id, taskRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TasksApi - object-oriented interface
 * @export
 * @class TasksApi
 * @extends {BaseAPI}
 */
export class TasksApi extends BaseAPI {
    /**
     * Create a task (this block of text becomes the operation\'s `description`)
     * @summary Create task (this line becomes the operation\'s `summary`)
     * @param {TaskRequest} taskRequest The task attributes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public todoPhoenixWebTaskControllerCreate(taskRequest: TaskRequest, options?: AxiosRequestConfig) {
        return TasksApiFp(this.configuration).todoPhoenixWebTaskControllerCreate(taskRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete task
     * @param {number} id Task ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public todoPhoenixWebTaskControllerDelete(id: number, options?: AxiosRequestConfig) {
        return TasksApiFp(this.configuration).todoPhoenixWebTaskControllerDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all tasks
     * @summary List tasks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public todoPhoenixWebTaskControllerIndex(options?: AxiosRequestConfig) {
        return TasksApiFp(this.configuration).todoPhoenixWebTaskControllerIndex(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update task
     * @param {number} id Task ID
     * @param {TaskRequest} taskRequest Task params
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public todoPhoenixWebTaskControllerUpdate(id: number, taskRequest: TaskRequest, options?: AxiosRequestConfig) {
        return TasksApiFp(this.configuration).todoPhoenixWebTaskControllerUpdate(id, taskRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update task
     * @param {number} id Task ID
     * @param {TaskRequest} taskRequest Task params
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TasksApi
     */
    public todoPhoenixWebTaskControllerUpdate2(id: number, taskRequest: TaskRequest, options?: AxiosRequestConfig) {
        return TasksApiFp(this.configuration).todoPhoenixWebTaskControllerUpdate2(id, taskRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


