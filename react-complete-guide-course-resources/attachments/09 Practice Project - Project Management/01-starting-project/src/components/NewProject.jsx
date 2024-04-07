import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
	const modal = useRef();
	const titleRef = useRef();
	const descRef = useRef();
	const dueDateRef = useRef();

	const handleSave = () => {
		const enteredTitle = titleRef.current.value;
		const enteredDesc = descRef.current.value;
		const enteredDueDate = dueDateRef.current.value;

		if (
			enteredTitle.trim() === "" ||
			enteredDesc.trim() === "" ||
			enteredDueDate.trim() === ""
		) {
			modal.current.open();
			return;
		}

		onAdd({
			title: enteredTitle,
			description: enteredDesc,
			dueDate: enteredDueDate,
		});
	};

	return (
		<>
			<Modal ref={modal}>
				<h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
				<p className="text-stone-600 mb-4">
					Oops... looks like you forgot to enter a value
				</p>
				<p className="text-stone-600 mb-4">Please provide a valid value</p>
			</Modal>
			<div className="w-[35rem] mt-16">
				<menu className="flex items-center justify-end gap-4 my-4">
					<li>
						<button
							className="text-stone-800 hover:text-stone-950"
							onClick={onCancel}
						>
							Cancel
						</button>
					</li>
					<li>
						<button
							onClick={handleSave}
							className="px-6 py-2 rounded-md text-stone-50 bg-stone-800 hover:bg-stone-950"
						>
							Save
						</button>
					</li>
				</menu>
				<div>
					<Input type="text" label="Title" isTextarea={false} ref={titleRef} />
					<Input label="Description" isTextarea={true} ref={descRef} />
					<Input
						type="date"
						label="Due Date"
						isTextarea={false}
						ref={dueDateRef}
					/>
				</div>
			</div>
		</>
	);
}
