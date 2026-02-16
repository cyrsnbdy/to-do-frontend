import type { TaskType } from "@/types/tasks/tasks.type";
import axiosInstance from "../../axios/axios-instance";

// Define response types
export type TaskResponse = {
  message: string;
  task: TaskType & { _id: string; createdAt: string; updatedAt: string };
};

export type TasksResponse = {
  message: string;
  count: number;
  tasks: (TaskType & { _id: string; createdAt: string; updatedAt: string })[];
};

// Create a new task
export const createTaskApi = async (data: { task: string }) => {
  const response = await axiosInstance.post<TaskResponse>("/tasks/add", data);
  return response.data;
};

// Get all tasks
export const getTasksApi = async () => {
  const response = await axiosInstance.get<TasksResponse>("/tasks");
  return response.data;
};

// Get single task by ID
export const getTaskByIdApi = async (id: string) => {
  const response = await axiosInstance.get<TaskResponse>(`/tasks/${id}`);
  return response.data;
};

// Update task
export const updateTaskApi = async (id: string, data: Partial<TaskType>) => {
  const response = await axiosInstance.put<TaskResponse>(
    `/tasks/update/${id}`,
    data,
  );
  return response.data;
};

// Toggle task completion status
export const toggleTaskStatusApi = async (id: string) => {
  const response = await axiosInstance.patch<TaskResponse>(
    `/tasks/${id}/toggle`,
  );
  return response.data;
};

// Delete task
export const deleteTaskApi = async (id: string) => {
  const response = await axiosInstance.delete<{ message: string }>(
    `/tasks/delete/${id}`,
  );
  return response.data;
};
