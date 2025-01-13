import React from "react";
import { useRouteError } from "react-router";

interface RouteError {
  message: string
  status: number,
}

const Error = () => {
  const error = useRouteError() as RouteError;
  return (
    <div>
      <div>{error.message}</div>
      <div>{error.status}</div>
    </div>
  )
};

export default Error;
