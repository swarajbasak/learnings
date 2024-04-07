import Button from "./Button";

export default function Sidebar({
	onStartAddProject,
	projects,
	onProjectSelect,
	selectedProjectId,
}) {
	return (
		<aside className="w-1/3 px-8 py-16 pg-stone-900 text-stone-50 bg-stone-900 md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
				YOUR PROJECTS
			</h2>
			<div>
				<Button onClick={onStartAddProject}>+ Add Project</Button>
			</div>
			<ul className="mt-8">
				{projects.map((project) => {
					let className =
						"w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
					if (project.id === selectedProjectId) {
						className += " bg-stone-800 text-stone-200";
					} else {
						className += " text-stone-400";
					}
					return (
						<li key={project.id}>
							<button
								className={className}
								onClick={() => onProjectSelect(project.id)}
							>
								{project.title}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
