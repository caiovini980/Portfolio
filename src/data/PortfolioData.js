import Tag, {Colors} from "../components/Tag"

// Images
import project1 from "../assets/mysims-cozy-bundle.jpg" 
import project2 from "../assets/Space-Tycoon.jpg" 
import project3 from "../assets/star jump.jpg" 
import project4 from "../assets/furryworld.png" 

export default [
    {
        Title: "MySims Cozy Bundle",
        ImageUrl: project1,
        tagColor: Colors.ORANGE,
        tagText: "Custom Engine",
        Period: "2023 - 2024",
        Description: "I was in the first launch of the game, for Switch. Worked in the UI's navigation, creation, animations and scaling",
        Link: "https://www.nintendo.com/us/store/products/mysims-cozy-bundle-switch/?srsltid=AfmBOorjo7DnOTS9sgQ989dQl13fAYHpEbh8VaXzYLpDiL55vIGz6HeC",
    },

    {
        Title: "Samsung Space Tycoon",
        ImageUrl: project2,
        tagColor: Colors.GREEN,
        tagText: "Roblox Studio",
        Period: "2022",
        Description: "Worked in the store system with soft currencies, integration with Roblox's Robux store and on core mechanics",
        Link: "https://www.roblox.com/games/10105990977/Preparing-for-a-new-event-Samsung-Space-Tycoon",
    },

    {
        Title: "Star Jump",
        ImageUrl: project3,
        tagColor: Colors.BLUE,
        tagText: "Unity",
        Period: "2021",
        Description: "First game I ever made. Worked everything from design to post production back in 2020. It was amazing to see my friends, and specially my family, play it",
        Link: "https://caiovini980.itch.io/star-jump",
    },

    {
        Title: "Furry World",
        ImageUrl: project4,
        tagColor: Colors.BLUE,
        tagText: "Unity",
        Period: "2021",
        Description: "Added underwater environment, fish rarity, fishing minigame, a store system and soft currency. All that being server-authoritative",
        Link: "https://furryworld.itch.io/game",
    }
]