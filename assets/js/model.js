// Derived views over data.js. Pure: pass the data module in.
export const skillById = (data, id) => data.SKILLS.find((s) => s.id === id);
export const skillName = (skill, lang) => (typeof skill.name === 'string' ? skill.name : skill.name[lang]);
export const projectsForSkill = (data, skillId) => data.PROJECTS.filter((p) => p.stack.includes(skillId));
export const skillsForDomain = (data, domainId) => data.SKILLS.filter((s) => s.domain === domainId);

export function domainSummary(data, domainId) {
  const skills = skillsForDomain(data, domainId).map((skill) => ({ skill, count: projectsForSkill(data, skill.id).length }));
  const ids = new Set(skills.map((x) => x.skill.id));
  const projects = data.PROJECTS.filter((p) => p.stack.some((id) => ids.has(id)));
  return { skills, projects };
}
