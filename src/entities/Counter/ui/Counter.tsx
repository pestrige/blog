import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";
import { useDispatch } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { useCounterSelector } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = (): JSX.Element => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const counterValue = useCounterSelector();

	const increment = () => {
		dispatch(counterActions.increment());
	};
	const decrement = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<div>
			<h1 data-testid="counter-value-test">{counterValue}</h1>
			<Button data-testid="increment-btn-test" onClick={increment}>
				{t("increment")}
			</Button>
			<Button data-testid="decrement-btn-test" onClick={decrement}>
				{t("decrement")}
			</Button>
		</div>
	);
};
