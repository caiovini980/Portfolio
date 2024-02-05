import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
                Caio
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                Software Engineer & Game Developer
            </p>
            <p className="text-sm max-w-xl mb-6 font-medium">
                I'm a game programmer fascinated about the sensation of playing a game, and focused on giving the player the best sensation possible through gameplay. I was able to design, maintain and improve systems through the course of 3 years with multi-disciplinary teams that goes from 5 to 30+ members, always concerned about the quality of the product delivered, and looking for ways to improve the development process for all the team members.
            </p>
        </div>
    )
}

export default Intro;