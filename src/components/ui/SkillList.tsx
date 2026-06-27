import React, { memo } from 'react';

interface Skill {
    name: string;
    icons: () => React.ReactNode;
}

interface SkillListProps {
    skills: Skill[];
    variant: 'core' | 'strong' | 'familiar';
}

const colorClasses = {
    core: "border-indigo-500/25 bg-indigo-500/5 hover:bg-indigo-500/10 hover:border-indigo-500/40 text-indigo-300/90",
    strong: "border-teal-500/25 bg-teal-500/5 hover:bg-teal-500/10 hover:border-teal-500/40 text-teal-300/90",
    familiar: "border-yellow-500/25 bg-yellow-500/5 hover:bg-yellow-500/10 hover:border-yellow-500/40 text-yellow-300/90"
};

export const SkillList = memo(({ skills, variant }: SkillListProps) => {
    const colorClass = colorClasses[variant];

    return (
        <div className="flex flex-wrap gap-3 xl:gap-4" style={{ contain: 'content' }}>
            {skills.map((skill) => (
                <div
                    key={skill.name}
                    className={`border ${colorClass} rounded-xl px-4 py-2 xl:px-5 xl:py-2.5 flex items-center gap-2.5 xl:gap-3 transition-colors duration-300 cursor-pointer`}
                >
                    {skill.icons()}
                    <span className="font-spline text-sm xl:text-base font-light">{skill.name}</span>
                </div>
            ))}
        </div>
    );
});

export default SkillList;