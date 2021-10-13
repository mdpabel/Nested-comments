function client(endPoint, { data, method, customConfig } = {}) {
  const config = {
    method: method ? method : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "Content-Type": data ? "application/json" : undefined,
    },
  };

  return window
    .fetch(`${process.env.REACT_APP_URI}/${endPoint}`, config)
    .then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export default client;
