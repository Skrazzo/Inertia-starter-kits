import { useForm } from "@inertiajs/inertia-react"


export default function Login() {
    function changeHandler(e){
        setData(e.target.name, e.target.value);
    }

    function submitHandler(e){
        e.preventDefault();
        post(route('post.login'));
    }
    
    const {
        data,
        setData,
        post,
		// delete: destroy, // way of setting these function with different names
        processing,
        reset,
        errors,
    } = useForm({
        username: '',
        password: '',
    });

    return (
        <form onSubmit={submitHandler}>
            <p>{errors.error}</p>

            <label >
                {(errors.username) ? errors.username : 'Username: '}
                <input type="text" name="username" onChange={changeHandler}/>
            </label>
            
            <label >
                {(errors.password) ? errors.password : 'Password: '}
                <input type="password" name="password" onChange={changeHandler}/>
            </label>
            <button>Login</button>
        </form>
    )
}
