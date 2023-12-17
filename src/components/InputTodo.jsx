function InputTodo() {
    return (
        <>
            <div className="addTodos">
                <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    className="todo-input"
                    value=''
                    placeholder="What to do"
                />

                {/* <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="add-btn"
                    onClick={() => add()}
                >
                    <motion.p>Add</motion.p>
                </motion.button> */}
                <br />
            </div>
        </>
    );
}

export default InputTodo