import React, { memo } from 'react';

interface Skill {
    name: string;
    icons: () => React.ReactNode;
}

interface SkillListProps {
    skills: Skill[];
}

export const SkillList = memo(({ skills }: SkillListProps) => {
    return (
        <div className="flex flex-wrap gap-3 xl:gap-4" style={{ contain: 'content' }}>
            {skills.map((skill) => (
                <div
                    key={skill.name}
                    className="border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20 text-[#A0A0A0] hover:text-white rounded-xl px-4 py-2 xl:px-5 xl:py-2.5 flex items-center gap-2.5 xl:gap-3 transition-colors duration-300 cursor-pointer"
                >
                    {skill.icons()}
                    <span className="font-spline text-sm xl:text-base font-light">{skill.name}</span>
                </div>
            ))}
        </div>
    );
});

export default SkillList;