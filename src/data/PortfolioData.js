import Tag, {Colors} from "../components/Tag"

// Images
import project1 from "../assets/mysims-cozy-bundle.jpg" 
import project2 from "../assets/Space-Tycoon.jpg" 
import project3 from "../assets/star jump.jpg" 
import project4 from "../assets/furryworld.png" 

export default [
    {
        title: "MySims Cozy Bundle",
        imageUrl: project1,
        tagColor: Colors.ORANGE,
        tagText: "Custom Engine",
        period: "2023 - 2024",
        shortDescription: "I was in the first launch of the game, for Switch. Worked in the UI's navigation, creation, animations and scaling.",
        link: "https://www.nintendo.com/us/store/products/mysims-cozy-bundle-switch/?srsltid=AfmBOorjo7DnOTS9sgQ989dQl13fAYHpEbh8VaXzYLpDiL55vIGz6HeC",
        slug: "my-sims-cozy-bundle",
    },

    {
        title: "Samsung Space Tycoon",
        imageUrl: project2,
        tagColor: Colors.GREEN,
        tagText: "Roblox Studio",
        period: "2022",
        shortDescription: "Worked in the store system with soft currencies, integration with Roblox's Robux store and on core mechanics.",
        link: "https://www.roblox.com/games/10105990977/Preparing-for-a-new-event-Samsung-Space-Tycoon",
        slug: "samsung-space-tycoon",
    },

    {
        title: "Star Jump",
        imageUrl: project3,
        tagColor: Colors.BLUE,
        tagText: "Unity",
        period: "2021",
        shortDescription: "First game I ever made. Worked everything from design to post production back in 2020. It was amazing to see my friends, and specially my family, play it.",
        link: "https://caiovini980.itch.io/star-jump",
        slug: "star-jump",
    },

    {
        title: "Furry World",
        imageUrl: project4,
        tagColor: Colors.BLUE,
        tagText: "Unity",
        period: "2021",
        shortDescription: "Added underwater environment, fish rarity, fishing minigame, a store system and soft currency. All that being server-authoritative.",
        link: "https://furryworld.itch.io/game",
        slug: "furry-world",
    }
]