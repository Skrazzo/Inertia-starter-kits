import { useForm } from "@inertiajs/inertia-react";

export default function Register() {

    function changeHandler(e){
        setData(e.target.name, e.target.value);
    }

    function submitHandler(e){
        e.preventDefault();
        post(route('post.register'));
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
            <label >
                {(errors.username) ? errors.username : 'Username: '}
                <input type="text" name="username" onChange={changeHandler}/>
            </label>
            
            <label >
                {(errors.password) ? errors.password : 'Password: '}
                <input type="password" name="password" onChange={changeHandler}/>
            </label>
            <button>Register</button>
        </form>
    )
}
