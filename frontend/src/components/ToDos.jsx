import PropTypes from 'prop-types';

export function ToDos({ todo }) {
    return (
        <div>
            <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed === true ? "Completed" : "Mark as Done"}</button>
            </div>
        </div>
    );
}

ToDos.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired
};
