import React, {useState, useEffect} from "react";
import axios from "axios";

const Section7 = () => {
    const [posts, setPosts] = useState([]);
    const [current, setCurrent] = useState("fundations")
    const [desc, setDesc] = useState("fundations")
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(`http://localhost:3005/${current}`);
            setPosts(res.data.items);
            setDesc(res.data.desc);
            setLoading(false);
        }
        fetchPosts();
        }, [current]);

    const list = posts.slice(currentPage * 3, currentPage * 3 + 3);
    return (
        <div>
            <div className="accordion-button">
                <div className="container px-4 d-flex justify-content-center align-content-center mt-5">
                    <div className="row gx-5">
                        <div className="col" style={{padding: 20}}>
                            <button onClick={() => setCurrent("fundations")} type="button" className="btn btn-outline border"
                                    style={{paddingTop: 10, width: 200, height: "auto"}}>Fundacjom
                            </button>
                        </div>
                        <div className="col" style={{padding: 20}}>
                            <button onClick={() => setCurrent("organisation")} type="button" className="btn btn-outline border"
                                    style={{width: 200, height: "auto", lineHeight: "1"}}>Organizacjom pozarządowym
                            </button>
                        </div>
                        <div className="col" style={{padding: 20}}>
                            <button onClick={() => setCurrent("collection")} type="button" className="btn btn-outline border"
                                    style={{paddingTop: 10, width: 200, height: "auto"}}>Lokalnym zbiórkom
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-box-pagination" style={{color: "#737373", fontSize: 20, padding: 100}}>
                {list.map(el => (
                    <>
                        <p>{el.title}</p>
                        <p className="text-box-pagination-sm" style={{fontSize: 15, fontStyle: "italic"}}>{el.subtitle}</p>
                        <hr/>
                    </>
                ))}


            </div>
            <nav aria-label="Page navigation" style={{display: "flex", justifyContent: "center"}}>
                <ul className="pagination">
                    {new Array(Math.ceil(posts.length / 3)).fill(null).map((_, i) => (
                        <li onClick={() => setCurrentPage(i)} className="page-item"><span className="page-link"
                                                     style={{
                                                         color: "#3C3C3C",
                                                         fontSize: 20,
                                                         margin: 15,
                                                         borderRadius: 1
                                                     }}
                                                     href="#">{i + 1}</span></li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
export default Section7;