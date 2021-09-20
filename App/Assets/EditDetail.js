import * as React from 'react';
import Svg, { Path, } from 'react-native-svg';

export default function EditDetail({color="#EE6C29"}) {
  return (

    <Svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M18.8719 3.89531L23.1 8.12344C23.2781 8.30156 23.2781 8.59219 23.1 8.77031L12.8625 19.0078L8.5125 19.4906C7.93125 19.5563 7.43906 19.0641 7.50469 18.4828L7.9875 14.1328L18.225 3.89531C18.4031 3.71719 18.6938 3.71719 18.8719 3.89531ZM26.4656 2.82188L24.1781 0.534375C23.4656 -0.178125 22.3078 -0.178125 21.5906 0.534375L19.9313 2.19375C19.7531 2.37188 19.7531 2.6625 19.9313 2.84063L24.1594 7.06875C24.3375 7.24687 24.6281 7.24687 24.8063 7.06875L26.4656 5.40938C27.1781 4.69219 27.1781 3.53438 26.4656 2.82188ZM18 16.2234V20.9953H3V5.99531H13.7719C13.9219 5.99531 14.0625 5.93438 14.1703 5.83125L16.0453 3.95625C16.4016 3.6 16.1484 2.99531 15.6469 2.99531H2.25C1.00781 2.99531 0 4.00313 0 5.24531V21.7453C0 22.9875 1.00781 23.9953 2.25 23.9953H18.75C19.9922 23.9953 21 22.9875 21 21.7453V14.3484C21 13.8469 20.3953 13.5984 20.0391 13.95L18.1641 15.825C18.0609 15.9328 18 16.0734 18 16.2234Z" fill={color}/>
    </Svg>


  );
}