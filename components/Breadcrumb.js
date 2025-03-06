import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = () => {
  const router = useRouter();
  const pathnames = router.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ul style={breadcrumbStyle}>
        <li><Link href="/">🏠 Home</Link></li>

        {pathnames.map((path, index) => {
          const href = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li key={index}>
              <Link href={href}>{formatPath(path)}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

// Function to format the breadcrumb text
const formatPath = (path) => {
  return path.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
};

// Breadcrumb Style
const breadcrumbStyle = {
  display: 'flex',
  gap: '15px',
  listStyle: 'none',
  padding: '10px',
  background: '#f8f9fa',
  borderRadius: '5px',
  fontSize: '1rem',
};

export default Breadcrumb;
