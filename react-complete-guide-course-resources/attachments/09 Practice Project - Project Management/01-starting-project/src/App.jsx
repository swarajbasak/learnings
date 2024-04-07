import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectInfo from "./components/ProjectInfo";

function App() {
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: [],
	});

	const handleAddTask = (text) => {
		setProjectState((prevState) => {
			const newTask = {
				text: text,
				projectId: prevState.selectedProjectId,
				id: Math.random(),
			};

			return {
				...prevState,
				tasks: [...prevState.tasks, newTask],
			};
		});
	};

	const handleDeleteTask = (id) => {
		setProjectState((prevState) => {
			return {
				...prevState,
				tasks: prevState.tasks.filter((task) => task.id !== id),
			};
		});
	};

	const handleStartAddProject = () => {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	};

	const handleAddProject = (projectData) => {
		setProjectState((prevState) => {
			const newProject = {
				...projectData,
				id: Math.random(),
			};

			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	};

	const handleCancelAddProject = () => {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
			};
		});
	};

	const handleSelectProject = (id) => {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: id,
			};
		});
	};

	const handleDeleteProject = () => {
		setProjectState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(
					(project) => project.id !== prevState.selectedProjectId
				),
			};
		});
	};

	const selectedProject = projectState.projects.find(
		(project) => project.id === projectState.selectedProjectId
	);

	let content = (
		<ProjectInfo
			project={selectedProject}
			onDelete={handleDeleteProject}
			onAddTask={handleAddTask}
			onDeleteTask={handleDeleteTask}
			tasks={projectState.tasks}
		/>
	);

	if (projectState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	} else if (projectState.selectedProjectId === null) {
		content = (
			<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
		);
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<Sidebar
				onStartAddProject={handleStartAddProject}
				projects={projectState.projects}
				onProjectSelect={handleSelectProject}
				selectedProjectId={projectState.selectedProjectId}
			/>
			{content}
		</main>
	);
}

export default App;
