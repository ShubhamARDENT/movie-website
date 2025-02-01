export const patchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  //   if (!response.ok) {
  //     throw new Error("network error");
  //   }

  console.log(response.ok, "response ok");
  return response.json();
};
