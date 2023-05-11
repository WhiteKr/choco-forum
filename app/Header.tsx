import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            <SubSection />
            <MainSection />
            <NavSection />
        </header>
    );
};

const SubSection: React.FC = () => {
    return (
        <section
            id='sub'
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                width: '100%',
                borderBottom: '1px solid rgb(255 255 255 / 10%)',
            }}
        >
            <ul
                style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    justifyContent: 'end',
                    width: '950px',
                    margin: 'auto',
                    listStyle: 'none',
                }}
            >
                <li>
                    <Link
                        href='join'
                        style={{
                            display: 'flex',
                            padding: '10px',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >회원가입</Link>
                </li>
                <li>
                    <Link
                        href='login'
                        style={{
                            display: 'flex',
                            padding: '10px',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >로그인</Link>
                </li>
            </ul>
        </section>
    );
};

const MainSection: React.FC = () => {
    return (
        <section
            id='main'
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '950px',
                margin: '15px 0',
            }}
        >
            <div
                className='logo'
                style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    fontSize: '3em',
                    fontWeight: '700',
                }}
            >
                <Link
                    href='/'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: 'auto',
                        color: '#ddd',
                        textDecoration: 'none',
                    }}
                >
                    <p>초코포럼</p>
                    <span
                        style={{
                            position: 'relative',
                            top: '14px',
                            fontSize: '.27em',
                        }}
                    >βeta</span>
                </Link>
            </div>
        </section>
    );
};

const NavSection: React.FC = () => {
    return (
        <section
            id='nav'
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#333',
            }}
        >
            <nav
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '950px',
                }}
            >
                {/* <ul
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'start',
                        listStyle: 'none',
                    }}
                >
                    <li style={{ backgroundColor: '#0B4C5F' }}>
                        <div>
                            <Link
                                style={{
                                    fontWeight: 'bold',
                                    color: '#F7FE2E',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 'auto',
                                    margin: '14px 10px',
                                    lineHeight: '16px',
                                    whiteSpace: 'nowrap',
                                    textDecoration: 'none',
                                }}
                                href='/best'
                            >👍화하하</Link>
                            <div>
                                <i></i>
                            </div>
                        </div>
                    </li>
                </ul> */}
            </nav>
        </section>
    );
};

export default Header;