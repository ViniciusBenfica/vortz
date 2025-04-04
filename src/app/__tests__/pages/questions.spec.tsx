import Questions from "@/app/pages/questions";
import { fireEvent, render } from "@testing-library/react-native";
import { router } from "expo-router";
import React from "react";

const mockThemes = [
	{
		title: "Comida",
		theme: ["testeTheme"],
		icon: require("../../../../assets/icons/food.png"),
		questions: ["testeQuestion"],
	},
];

jest.mock("expo-router", () => ({
	router: {
		push: jest.fn(),
	},
}));

jest.mock("@/store/theme", () => ({
	useStoreTheme: () => ({
		themes: mockThemes,
		getQuestions: jest.fn(),
		getRandomQuestion: jest.fn(),
		currentQuestion: "Qual sua comida favorita?",
	}),
}));

jest.mock("@/store/players", () => ({
	useStorePlayer: () => ({
		players: [{ name: "Jogador 1" }, { name: "Jogador 2" }],
	}),
}));

describe("Questions", () => {
	it("renders correctly", async () => {
		const { getByText } = render(<Questions />);
		expect(getByText("Pergunta para")).toBeTruthy();
		expect(getByText("Jogador 1")).toBeTruthy();
		expect(getByText("Qual sua comida favorita?")).toBeTruthy();
	});

	it("navigates on button press", () => {
		const { getByText } = render(<Questions />);
		fireEvent.press(getByText("Próxima"));
		expect(router.push).toHaveBeenCalledWith("/pages/votes");
	});
});
