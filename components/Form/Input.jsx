

export const Input = ({ label, type, placeholder, value, onChange, error, ...props }) => {
    return (
        <div className="mb-3">
            <label className='block text-sm font-medium text-gray-500 mb-2.5'>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='block w-full px-3 py-2 mt-1 text-sm border-gray-600 border-dashed border bg-transparent rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500/30 placeholder:text-gray-600'
                {...props}
            />
            {error && <p className='text-sm text-red-500'>{error}</p>}
        </div>
    )
}