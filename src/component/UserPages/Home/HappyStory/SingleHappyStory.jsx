import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';


const SingleHappyStory = () => {
    const params = useParams();
    const [happyStories, setHappyStories] = useState([]);
    useEffect(() => {
        fetch(`https://soulmates-server.vercel.app/allcouple/${params.id}`)
            .then(res => res.json())
            .then(data => setHappyStories(data));
    }, [params.id])

    const { name, img, about_marriage } = happyStories;

    return (
        <div >
            <div className="card card-side bg-base-100 shadow-2xl p-4 ">
                <figure><img src={img} alt="Movie" /></figure>
                <div className="card-body">

                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleHappyStory;