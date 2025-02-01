export const deleteData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("failed to delete the data");
  }

  return response.status;
};
