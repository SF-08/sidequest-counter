import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
.setName("testping")
.setDescription("Replies with Pong!");

export async function execute(interaction: CommandInteraction) {
  await interaction.reply("Pong!");
}

