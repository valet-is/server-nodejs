import httpStatus from './status.json';

export const bad =
  (resp = null) =>
  (res) => {
    const code = 400;
    const data = null;
    const error = resp || httpStatus[code];
    return res.status(code).json({ code, data, error });
  };

export const unauthorized =
  (resp = null) =>
  (res) => {
    const code = 401;
    const data = null;
    const error = resp || httpStatus[code];
    return res.status(code).json({ code, data, error });
  };

export const forbidden =
  (resp = null) =>
  (res) => {
    const code = 403;
    const data = null;
    const error = resp || httpStatus[code];
    return res.status(code).json({ code, data, error });
  };

export const internalError =
  (resp = null) =>
  (res) => {
    const code = 500;
    const data = null;
    const error = resp || httpStatus[code];
    return res.status(code).json({ code, data, error });
  };

export const notFound =
  (resp = null) =>
  (res) => {
    const code = 404;
    const data = null;
    const error = resp || httpStatus[code];
    return res.status(code).json({ code, data, error });
  };

export const ok =
  (resp = null) =>
  (res) => {
    const code = 200;
    const data = resp || httpStatus[code];
    const error = null;
    return res.status(code).json({ code, data, error });
  };
