import axios from "axios";
import { GluegunCommand } from "gluegun";

import { env, nodePort } from "../config/environment";

const otocyonBaseURL =
	env === "dev" ? `http://localhost:${nodePort}` : "otocyon.herokuapp.com";

const otocyonAPI = axios.create({ baseURL: otocyonBaseURL });

const genBadgeSteam: GluegunCommand = {
	name: "gen-badge-steam",
	description: "gen a steam achievement badge for a 100% game",
	run: async (toolbox) => {
		const {
			parameters,
			template,
			print: { success, error },
		} = toolbox;

		if (!parameters.first) {
			error("error: missing steamProfileID");
			return;
		}

		if (!parameters.second) {
			error("error: missing steamGameID");
			return;
		}

		const {
			data: { platinumGameData },
		} = await otocyonAPI.get("/steam/getPlatinumGameData", {
			params: {
				steamProfileID: parameters.first.toString(),
				steamGameID: parameters.second.toString(),
			},
		});

		const {
			gameName,
			gameThumb,
			totalTimePlayed,
			achievsLength,
			lastFiveAchievs,
		} = platinumGameData;

		await template.generate({
			template: "steam-badge.ts.ejs",
			target: `models/${gameName.replace(/\s/g, "")}-model.html`,
			props: {
				gameName,
				gameThumb,
				totalTimePlayed,
				achievsLength,
				lastFiveAchievs,
			},
		});

		success(`Successful! badge for game "${gameName}" generated!`);
	},
};

export default genBadgeSteam;
