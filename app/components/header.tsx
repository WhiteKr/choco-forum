'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
    const pathname: string = usePathname();

    return (
        <div style={{
            backgroundColor: '#D9D9D9',
            display: 'flex',
            padding: '10px',
        }}>
            <div style={{ flex: 1 }} />
            <Link
                href='/'
                style={{
                    color: 'black',
                    textDecoration: 'none',
                }}
            >
                <h1
                    style={{
                        flex: 1,
                        margin: '0 auto',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        cursor: 'pointer',
                    }}
                >초코포럼</h1>
            </Link>
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'end',
            }}>
                {pathname !== '/login' && (
                    <Link href='/login'>
                        <button style={{
                            height: '100%',
                            width: '100%',
                            padding: '0 15px',
                            cursor: 'pointer',
                        }}>로그인</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;