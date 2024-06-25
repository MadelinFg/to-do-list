import './Input.css';

function Input({type = "text", title, value, placeholder = "", name, disabled = false, required, onChange, lineInput}) {
    return (
        <div className="input-container">
            <div className="input-title">
                <label htmlFor={name} className='input-label'>{title}</label>
            </div>
            
            <input className="input-component"
                type={type}
                value={value} 
                name={name} 
                placeholder={placeholder} 
                disabled={disabled}
                required={required}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;