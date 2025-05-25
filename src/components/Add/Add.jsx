import {useParams, NavLink} from 'react-router';
import {http_get_as_json, host, http_post} from '../../modules/httpHelper.mjs';

export default function Add() {
    const params = useParams();
    const board = http_get_as_json(host() + "boards?short_hand=" + params.board);
    const board_id = board.id; 
    const threads = http_get_as_json(host() + "threads");
    const thread_id = threads.count+1;
    return (
        <>
            <div>
                <div>
                    <h1>Add new Thread</h1>
                    <form id="add_thread">
                        <p>Title: <input type="text" name="title" /></p>
                        <p>Descriptin: <textarea name="dist" rows="5" cols="33"></ textarea></p>
                        <div>
                            <p>Commands: </p> <br/>
                            <input type="text" name="command1" /> <br />
                            <input type="text" name="command2" /> <br />
                        </div>
                        <input type="button" onClick={() => {
                            const form = document.getElementById('add_thread');
                            const obj = {
                                "id": thread_id,
                                "title": form.elements.title.value,
                                "dist": form.elements.dist.value,
                                "command1": form.elements.command1,
                                "command2": form.elements.command2,
                                "board_id": board_id
                            }
                            console.log(obj);
                            http_post(host() + "threads", JSON.stringify(obj));
                        }} value="add" />
                    </form>
                </div>
                <NavLink to="/">
                    Homepage
                </NavLink>
            </div>
        </>
    );
}
