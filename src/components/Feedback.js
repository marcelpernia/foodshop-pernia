import Swal from 'sweetalert2';

export const success = (title, body) => {
    return (
        Swal.fire(
            title, 
            body, 
            'success'
        )
    )
}