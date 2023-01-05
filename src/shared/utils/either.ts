type TRight<Ok> = {
  type: "right";
  data: Ok;
};

type TLeft<Err> = {
  type: "left";
  data: Err;
};

export type Either<Err, Ok> = TLeft<Err> | TRight<Ok>;

export const Right = <Ok>(ok: Ok): TRight<Ok> => ({
  type: "right",
  data: ok,
});

export const Left = <Err>(err: Err): TLeft<Err> => ({
  type: "left",
  data: err,
});
