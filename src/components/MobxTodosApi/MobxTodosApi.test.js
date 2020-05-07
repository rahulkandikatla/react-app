import {
  API_SUCCESS,
  API_FAILED,
  API_FETCHING,
  API_INITIAL
} from "@ib/api-constants";

import TodoService from "../../services/TodoService";
import {TodoStore} from "../../stores/TodoStore";

describe("AuthStore Tests", () => {
  let todoAPI;
  let todoStore;
  beforeEach(() => {
    todoAPI = new TodoService();
    todoStore = new TodoStore(todoAPI);
    

  });

  it("should test initialising todo store", () => {
      expect(todoStore.getTodoListAPIStatus).toBe(API_INITIAL);
    expect(todoStore.getTodoListAPIError).toBe(null);
  });

  it("should test userTodoListAPI data fetching state", () => {
   
    const mockLoadingPromise = new Promise(function(resolve, reject) {});
    const mockTodoListAPI = jest.fn();
    mockTodoListAPI.mockReturnValue(mockLoadingPromise);
    todoAPI.getTodos = mockTodoListAPI;

    todoStore.getTodoList();
    
    console.log(todoStore.getTodoListAPIStatus)

    expect(todoStore.getTodoListAPIStatus).toBe(API_FETCHING);
  });

  it("should test userTodoListAPI success state", async () => {
  
    const mockSuccessPromise = new Promise(function(resolve, reject) {
       resolve([{id:"1"}]);
    });
    const mockTodoListAPI = jest.fn();
    mockTodoListAPI.mockReturnValue(mockSuccessPromise);
    
    todoAPI.getTodos = mockTodoListAPI;
    await todoStore.getTodoList();
    expect(todoStore.getTodoListAPIStatus).toBe(API_SUCCESS);

  });

  it("should test userTodoListAPI failure state", async () => {
  
    const mockFailurePromise = new Promise(function(resolve, reject) {
      reject(new Error("error"));
    });

    const mockTodoListAPI = jest.fn();
    mockTodoListAPI.mockReturnValue(mockFailurePromise);
    todoAPI.getTodos= mockTodoListAPI;
    await todoStore.getTodoList();
    expect(todoStore.getTodoListAPIStatus).toBe(API_FAILED);
    expect(todoStore.getTodoListAPIError).toBe("error");
   
  });

});