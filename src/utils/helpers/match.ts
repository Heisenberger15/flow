type Cases<Obj extends object, Default> = {
	[K in keyof Obj]: Obj[K];
} & { default: Default };

type MatchResult<Obj extends object, Exp extends keyof Obj, Default> =
	| Obj[Exp]
	| Default;

export function match<Obj extends object, Exp extends keyof Obj, Default>(
	expression: Exp,
	cases: Cases<Obj, Default>,
): MatchResult<Obj, Exp, Default> {
	return cases?.[expression] || cases?.default;
}
