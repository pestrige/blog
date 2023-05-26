import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";

type SpringType = typeof import("@react-spring/web");
type GestureType = typeof import("@use-gesture/react");

interface AnimationContextPayload {
	Spring?: SpringType;
	Gesture?: GestureType;
	isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

export const useAnimationContext = () => {
	return useContext(AnimationContext) as Required<AnimationContextPayload>;
};

const getAsyncAnimationModules = async () => {
	return Promise.all([import("@react-spring/web"), import("@use-gesture/react")]);
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
	const SpringRef = useRef<SpringType>();
	const GestureRef = useRef<GestureType>();
	const [isLoaded, setIsLoaded] = useState(false);

	const contextValue: AnimationContextPayload = useMemo(
		() => ({
			Spring: SpringRef.current,
			Gesture: GestureRef.current,
			isLoaded,
		}),
		[isLoaded],
	);

	useEffect(() => {
		getAsyncAnimationModules()
			.then(([Spring, Gesture]) => {
				SpringRef.current = Spring;
				GestureRef.current = Gesture;
			})
			.finally(() => setIsLoaded(true));
	});

	return <AnimationContext.Provider value={contextValue}>{children}</AnimationContext.Provider>;
};
