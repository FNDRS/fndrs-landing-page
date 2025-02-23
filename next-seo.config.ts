import {DefaultSeoProps} from "next-seo";

const SEO: DefaultSeoProps = {
    title: 'FNDRS - Make things with excellence',
    description:
        'FNDRS is a creative studio that transforms ideas into innovative solutions.',
    canonical: 'https://www.thefndrs.com',
    openGraph: {
        type: 'website',
        locale: 'en_HN',
        url: 'https://www.thefndrs.com',
        siteName: 'FNDRS',
        title: 'FNDRS - Make things with excellence',
        description:
            'FNDRS is a creative studio that transforms ideas into innovative solutions.',
        images: [
            {
                url: 'https://www.thefndrs.com/_next/image?url=%2Ffndrs-logo.webp&w=128&q=75',
                width: 1200,
                height: 630,
                alt: 'FNDRS - Make things with excellence'
            }
        ]
    },
    twitter: {
        handle: '@FNDRS',
        site: '@FNDRS',
        cardType: 'summary_large_image'
    },
    additionalMetaTags: [
        {
            name: 'author',
            content: 'FNDRS'
        },
        {
            name: 'keywords',
            content: 'FNDRS, Creative Studio, Design, Innovation, Branding, Excellence, Web Development, Digital Solutions'
        },
        {
            name: 'robots',
            content: 'index, follow'
        }
    ]
};

export default SEO;
