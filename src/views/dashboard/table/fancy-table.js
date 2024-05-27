import React,{ Fragment, memo } from 'react'

// React-bootstrap
import {Row, Col, Image,Button, Table} from 'react-bootstrap'

//Components
import Card from '../../../components/bootstrap/card'

//Img
import img1 from '../../../assets/images/table/1.png'
import img2 from '../../../assets/images/table/2.png'
import img3 from '../../../assets/images/table/3.png'
import img4 from '../../../assets/images/table/4.png'
import img5 from '../../../assets/images/table/5.png'
import img6 from '../../../assets/images/table/6.png'
import img7 from '../../../assets/images/table/7.png'
import img8 from '../../../assets/images/table/8.png'
import img9 from '../../../assets/images/table/9.png'


const Fancytable = memo(() => {
    const usa = <svg width="18" className="me-2" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="20" height="13.75" fill="#EEF3F8"/>
                    <rect y="0.5" width="11.25" height="8.75" fill="#41479B"/>
                    <rect x="11.25" y="0.5" width="8.75" height="1.25" fill="#DC251C"/>
                    <rect x="11.25" y="3" width="8.75" height="1.25" fill="#DC251C"/>
                    <rect x="11.25" y="5.5" width="8.75" height="1.25" fill="#DC251C"/>
                    <rect x="11.25" y="8" width="8.75" height="1.25" fill="#DC251C"/>
                    <rect y="10.5" width="20" height="1.25" fill="#DC251C"/>
                    <rect y="13" width="20" height="1.25" fill="#DC251C"/>
                    <rect x="1.25" y="1.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="3.75" y="1.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="6.25" y="1.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="8.75" y="1.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="1.25" y="4.25" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="3.75" y="4.25" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="6.25" y="4.25" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="2.5" y="5.5" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="5" y="5.5" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="7.5" y="5.5" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="2.5" y="3" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="5" y="3" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="7.5" y="3" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="8.75" y="4.25" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="1.25" y="6.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="3.75" y="6.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="6.25" y="6.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                    <rect x="8.75" y="6.75" width="1.25" height="1.25" fill="#C5D0EC"/>
                </svg>

    const spn = <svg width="18" className="me-2" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="15" transform="translate(0 0.5)" fill="#FFD018"/>
                    <rect y="0.5" width="20" height="3.75" fill="#DC251C"/>
                    <rect y="11.75" width="20" height="3.75" fill="#DC251C"/>
                    <rect x="3.75" y="5.5" width="2.5" height="2.5" fill="#DC251C"/>
                    <path d="M3.75 8H6.25V10.5H4.75C4.19772 10.5 3.75 10.0523 3.75 9.5V8Z" fill="#FF8718"/>
                    <path d="M6.25 8H8.75V9.5C8.75 10.0523 8.30228 10.5 7.75 10.5H6.25V8Z" fill="#DC251C"/>
                    <rect x="6.25" y="5.5" width="2.5" height="2.5" fill="#A6A6A6"/>
                    <circle cx="6.25" cy="8" r="0.625" fill="#41479B"/>
                </svg>

    const itl = <svg width="18" className="me-2" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="20" height="15" fill="#F5F8FB"/>
                    <rect y="0.5" width="6.25" height="15" fill="#2B9F5A"/>
                    <rect x="13.75" y="0.5" width="6.25" height="15" fill="#DC251C"/>
                </svg>

    const jpn = <svg width="18" className="me-2" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="15" transform="translate(0 0.5)" fill="#F5F8FB"/>
                    <circle cx="9.5" cy="7.5" r="3.5" fill="#DC251C"/>
                </svg>

    const ger = <svg width="22" className="me-2" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21.3333" height="16" fill="#272727"/>
                    <rect y="5.3335" width="21.3333" height="5.33333" fill="#E31D1C"/>
                    <rect y="10.6665" width="21.3333" height="5.33333" fill="#FFD018"/>
                </svg>

    const ind = <svg width="21" className="me-2" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_80_4707)">
                    <path d="M0 0H21V5.33333H0V0Z" fill="#FF8718"/>
                    <path d="M0 5.3335H21V10.6668H0V5.3335Z" fill="#F5F8FB"/>
                    <path d="M0 10.6665H21V15.9998H0V10.6665Z" fill="#2B9F5A"/>
                    <path d="M11.813 8.00033C11.813 8.73671 11.2254 9.33366 10.5005 9.33366C9.77561 9.33366 9.18799 8.73671 9.18799 8.00033C9.18799 7.26395 9.77561 6.66699 10.5005 6.66699C11.2254 6.66699 11.813 7.26395 11.813 8.00033Z" fill="#F5F8FB"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.4995 7.33333C10.1371 7.33333 9.84326 7.63181 9.84326 8C9.84326 8.36819 10.1371 8.66667 10.4995 8.66667C10.8619 8.66667 11.1558 8.36819 11.1558 8C11.1558 7.63181 10.8619 7.33333 10.4995 7.33333ZM8.53076 8C8.53076 6.89543 9.4122 6 10.4995 6C11.5868 6 12.4683 6.89543 12.4683 8C12.4683 9.10457 11.5868 10 10.4995 10C9.4122 10 8.53076 9.10457 8.53076 8Z" fill="#41479B"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_80_4707">
                    <rect width="21" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

    const uae = <svg width="22" className="me-2" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="5.3335" width="21.3333" height="5.33333" fill="#F5F8FB"/>
                    <rect width="21.3333" height="5.33333" fill="#2B9F5A"/>
                    <rect y="10.6665" width="21.3333" height="5.33333" fill="#272727"/>
                    <rect width="6.66667" height="16" fill="#DC251C"/>
                </svg>

    const grc = <svg width="21" className="me-2" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="16" fill="#F5F8FB"/>
                    <rect width="21" height="2" fill="#41479B"/>
                    <rect y="3" width="21" height="3" fill="#41479B"/>
                    <rect y="7" width="21" height="2" fill="#41479B"/>
                    <rect width="9" height="9" fill="#41479B"/>
                    <rect y="3" width="9" height="3" fill="#F5F8FB"/>
                    <rect x="3" y="9" width="9" height="3" transform="rotate(-90 3 9)" fill="#F5F8FB"/>
                    <rect y="10" width="21" height="3" fill="#41479B"/>
                    <rect y="14" width="21" height="2" fill="#41479B"/>
                </svg>

    const sko = <svg width="18" className="me-2" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="16" fill="#F5F8FB"/>
                    <ellipse cx="10.5" cy="7.69231" rx="3.5" ry="3.69231" fill="#DC251C"/>
                    <mask style={{maskType: 'alpha'}}  maskUnits="userSpaceOnUse" x="7" y="7" width="7" height="5">
                    <path d="M14 12.0002V8.30792C12.832 6.15169 10.4961 7.92611 10.4961 7.92611C10.4961 7.92611 8.16538 9.53597 7 7.07715V12.0002H14Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask0_80_4853)">
                    <ellipse cx="10.5" cy="7.69231" rx="3.5" ry="3.69231" fill="#41479B"/>
                    </g>
                    <path d="M2.16455 4.83789L4.32821 1.09033" stroke="black" strokeWidth="0.5"/>
                    <path d="M3.12744 5.39551L5.2911 1.64795" stroke="black" strokeWidth="0.5"/>
                    <path d="M4.09131 5.95117L6.25496 2.20361" stroke="black" strokeWidth="0.5"/>
                    <path d="M18.9995 4.83789L16.8359 1.09033" stroke="black" strokeWidth="0.5" strokeDasharray="8 1"/>
                    <path d="M18.0366 5.39551L15.873 1.64795" stroke="black" strokeWidth="0.5"/>
                    <path d="M17.0728 5.95117L14.9091 2.20361" stroke="black" strokeWidth="0.5" strokeDasharray="8 1"/>
                    <path d="M2.16406 11.5049L4.32772 15.2524" stroke="black" strokeWidth="0.5"/>
                    <path d="M3.12744 10.9492L5.2911 14.6968" stroke="black" strokeWidth="0.5" strokeDasharray="8 1"/>
                    <path d="M4.09082 10.3926L6.25447 14.1401" stroke="black" strokeWidth="0.5"/>
                    <path d="M18.9995 11.5049L16.8359 15.2524" stroke="black" strokeWidth="0.5" strokeDasharray="8 1"/>
                    <path d="M18.0366 10.9492L15.873 14.6968" stroke="black" strokeWidth="0.5" strokeDasharray="8 1"/>
                    <path d="M17.0732 10.3926L14.9096 14.1401" stroke="black" strokeWidth="0.5" strokeDasharray="8 1"/>
                </svg>

    const add = <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M21.101 9.58786H19.8979V8.41162C19.8979 7.90945 19.4952 7.5 18.999 7.5C18.5038 7.5 18.1 7.90945 18.1 8.41162V9.58786H16.899C16.4027 9.58786 16 9.99731 16 10.4995C16 11.0016 16.4027 11.4111 16.899 11.4111H18.1V12.5884C18.1 13.0906 18.5038 13.5 18.999 13.5C19.4952 13.5 19.8979 13.0906 19.8979 12.5884V11.4111H21.101C21.5962 11.4111 22 11.0016 22 10.4995C22 9.99731 21.5962 9.58786 21.101 9.58786Z" fill="currentColor"></path>
                    <path d="M9.5 15.0156C5.45422 15.0156 2 15.6625 2 18.2467C2 20.83 5.4332 21.5001 9.5 21.5001C13.5448 21.5001 17 20.8533 17 18.269C17 15.6848 13.5668 15.0156 9.5 15.0156Z" fill="currentColor"></path>
                    <path opacity="0.4" d="M9.50023 12.5542C12.2548 12.5542 14.4629 10.3177 14.4629 7.52761C14.4629 4.73754 12.2548 2.5 9.50023 2.5C6.74566 2.5 4.5376 4.73754 4.5376 7.52761C4.5376 10.3177 6.74566 12.5542 9.50023 12.5542Z" fill="currentColor"></path>
                </svg>

    const edit = <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z" fill="currentColor"></path>
                    <path d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z" fill="currentColor"></path>
                    <path opacity="0.4" d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z" fill="currentColor"></path>
                </svg>

    const remove =  <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M19.643 9.48851C19.643 9.5565 19.11 16.2973 18.8056 19.1342C18.615 20.8751 17.4927 21.9311 15.8092 21.9611C14.5157 21.9901 13.2494 22.0001 12.0036 22.0001C10.6809 22.0001 9.38741 21.9901 8.13185 21.9611C6.50477 21.9221 5.38147 20.8451 5.20057 19.1342C4.88741 16.2873 4.36418 9.5565 4.35445 9.48851C4.34473 9.28351 4.41086 9.08852 4.54507 8.93053C4.67734 8.78453 4.86796 8.69653 5.06831 8.69653H18.9388C19.1382 8.69653 19.3191 8.78453 19.4621 8.93053C19.5953 9.08852 19.6624 9.28351 19.643 9.48851Z" fill="currentColor"></path>
                        <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="currentColor"></path>
                    </svg>

    const table1 =[
        {
            name:'Clara Mist',
            desc: '@mist.c',
            img:img7,
            contact:'(208) 674-3424',
            emailid:'mist.e@mail.com',
            countrysvg:uae,
            countryname:'USA',
            purchases:'327',
            statusColor:'warning',
            bgColor:'warning',
            status:'Pending',
            actionadd: add,
            actionedit:edit,
            actionremove: remove
        },
        {
            name:'Clinette Mark',
            desc:'Clinette Mark',
            img:img4,
            contact:'(208) 346-4687',
            emailid:'c.mark@mail.com',
            countrysvg:jpn,
            countryname:'JPN',
            purchases:'324',
            statusColor:'success',
            bgColor:'success',
            status:'Complete',
            actionadd: add,
            actionedit:edit,
            actionremove: remove
        },
        {
            name:'Dennis Hall',
            desc: '@dennis',
            img:img6,
            contact:'(208) 555-0112',
            emailid:'dennis.e@mail.com',
            countrysvg:ind,
            countryname:'IND',
            purchases:'210',
            statusColor:'primary',
            bgColor:'primary',
            status:'active',
            actionadd: add,
            actionedit:edit,
            actionremove: remove
        },
        {
            name:'Elon Musk',
            desc:'@musk',
            img:img1,
            contact:'(208) 555-0112',
            emailid:'musk.e@mail.com',
            countrysvg:usa,
            countryname:'USA',
            purchases:'548',
            statusColor:'primary',
            bgColor:'primary',
            status:'Active',
            actionadd: add,
            actionedit:edit,
            actionremove: remove
        },
        {
            name:'Elon Musk',
            desc:'@musk',
            img:img8,
            contact:'(208) 555-0112',
            emailid:'musk.e@mail.com',
            countrysvg:ger,
            countryname:'GER',
            purchases:'548',
            statusColor:'primary',
            bgColor:'primary',
            status:'Hold',
            actionadd: add,
            actionedit:edit,
            actionremove: remove
        },
        {
            name:'Elon Musk',
            desc:'@musk',
            img:img9,
            contact:'(208) 555-0112',
            emailid:'musk.e@mail.com',
            countrysvg:sko,
            countryname:'S.KO',
            purchases:'548',
            statusColor:'success',
            bgColor:'success',
            status:'complete',
            actionadd: add,
            actionedit:edit,
            actionremove: remove
        },
        {
            name:'James Mason',
            desc:'@mason.j',
            img:img3,
            contact:'(208) 326-4679',
            emailid:'mason.j@mail.com',
            countrysvg:itl,
            countryname:'ITL',
            purchases:'481',
            statusColor:'primary',
            bgColor:'primary',
            status:'Hold',
            actionadd: add,
            actionedit:edit,
            actionremove: remove
        },
        {
            name:'Jamie Park',
            desc:'@jpark',
            img:img5,
            contact:'(208) 778-6878',
            emailid:'park.e@mail.com',
            countrysvg:grc,
            countryname:'GRC',
            purchases:'123',
            statusColor:'warning',
            bgColor:'warning',
            status:'Inactive',
            actionadd: add,
            actionedit:edit,
            actionremove: remove
        },
        {
            name:'Marie Clark',
            desc:'@mclark',
            img:img2,
            contact:'(208) 262-238',
            emailid:'mclark@mail.com',
            countrysvg:spn,
            countryname:'SPN',
            purchases:'256',
            statusColor:'warning',
            bgColor:'warning',
            status:'Pending',
            actionadd: add,
            actionedit:edit,
            actionremove: remove
        }
        
    ]
  return (
    <Fragment>
          <Row>
            <Col lg="12">
                <Card>
                    <Card.Body className='p-0'>
                        <div className="fancy-table table-responsive rounded">
                            <Table className="mb-0" id="datatable" data-toggle="data-table" striped>
                                <thead>
                                    <tr className="bg-white">
                                        <th scope="col">Profiles</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Email ID</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">Purchases</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        table1.map((item,index) =>
                                            {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <Image className="rounded img-fluid w-25 me-3" src={item.img} alt=""/>
                                                                <div className="media-support-info">
                                                                    <h6 className="mb-0">{item.name}</h6>
                                                                    <p className="mb-0">{item.desc}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-dark">{item.contact}</td>
                                                        <td className="text-dark">{item.emailid}</td>
                                                        <td className="text-dark">
                                                        {item.countrysvg}
                                                            {item.countryname}
                                                        </td>
                                                        <td className="text-dark">{item.purchases}</td>
                                                        <td>
                                                            <span className={`badge rounded-pill bg-${item.bgColor}-subtle p-2 text-${item.statusColor }`}>{item.status}</span>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-evenly">
                                                                <Button className="btn btn-primary btn-icon btn-sm rounded-pill" to="#" role="button">
                                                                    <span className="btn-inner">
                                                                        {item.actionadd}
                                                                    </span>
                                                                </Button>
                                                                <Button className="btn btn-primary btn-icon btn-sm rounded-pill ms-2" to="#" role="button">
                                                                    <span className="btn-inner">
                                                                    {item.actionedit}
                                                                    </span>
                                                                </Button>
                                                                <Button className="btn btn-primary btn-icon btn-sm rounded-pill ms-2" to="#" role="button">
                                                                    <span className="btn-inner">
                                                                    {item.actionremove}
                                                                    </span>
                                                                </Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )       
                                            }
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Fragment>
  )
}
)

Fancytable.displayName="Fancytable"
export default Fancytable