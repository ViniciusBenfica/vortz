import { create } from "zustand";

interface IPlayers {
	players: { id: number; name: string; votes: number }[];
	randomPlayer: string;
	updatePlayer: (text: string, index: number) => void;
	removePlayer: (index: number) => void;
	getRandomPlayer: () => void;
	votedPlayer: (index: number) => void;
	clearVotes: () => void;
}

export const useStorePlayer = create<IPlayers>((set) => ({
	players: [{ id: 0, name: "", votes: 0 }],
	randomPlayer: "",
	votedPlayer: (index: number) => {
		set((oldState) => {
			const newPlayers = [...oldState.players];
			newPlayers[index].votes = newPlayers[index].votes + 1;
			return { ...oldState, players: newPlayers };
		});
	},
	updatePlayer: (text: string, index: number) => {
		set((oldState) => {
			if (text === "") {
				const newPlayers = oldState.players.filter((_, i) => i !== index);
				return { players: newPlayers };
			}
			const newPlayers = [...oldState.players];
			newPlayers[index].name = text;
			if (oldState.players[oldState.players.length - 1]?.name !== "") {
				newPlayers.push({
					id: oldState.players[oldState.players.length - 1].id + 1,
					name: "",
					votes: 0,
				});
			}
			return { players: newPlayers };
		});
	},
	removePlayer: (index: number) => {
		set((oldState) => {
			const newPlayers = oldState.players.filter((_, i) => i !== index);
			return { players: newPlayers };
		});
	},
	getRandomPlayer: () => {
		set((oldState) => {
			const randomPlayer =
				oldState.players[Math.floor(Math.random() * (oldState.players.length - 1))]?.name;
			return { randomPlayer };
		});
	},
	clearVotes: () => {
		set((oldState) => {
			const newPlayers = oldState.players.map((player) => ({
				...player,
				votes: 0,
			}));
			return { ...oldState, players: newPlayers };
		});
	},
}));
