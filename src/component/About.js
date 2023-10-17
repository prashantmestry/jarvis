import React, { useContext } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import useApiCall from "./useApiCall";
import { store } from "../Redux/store";
//import DebounceComp from './DebounceComp';

const About = (props) => {
  // const home = useSelector(state => state.home);
  //const dispatch = useDispatch();

  const info = useApiCall("https://jsonplaceholder.typicode.com/users");

  const changeName = () => {
    // dispatch({
    //   type: "CHANGE_NAME",
    //   data: "Yadnesh",
    // });
  };
  return (
    <div>
      <span data-testid="pagename">About page </span>
      <button style={{ border : '1px solid gray' , padding : '5px' }} onClick={ () => props.changeName()}>Click Me</button>
      {/* <DebounceComp /> */}
      <div>
        {info?.data?.length > 0 && (
          <div>
            {info?.data.map((item) => {
              return <div key={item?.id}>{item?.name}</div>;
            })}
          </div>
        )}
      </div>

      <div>
        Redux changed name {props.home?.name}
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeName: () =>
      dispatch({
        type: "CHANGE_NAME",
        data: "Yadnesh",
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
