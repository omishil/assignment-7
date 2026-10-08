import React from 'react';
import Link from 'next/link';

const NavLinks = async () => {
 const res = await fetch(
'https://api.api-store.workers.dev/api/bazardor/categories'
    );
    const categories = await res.json();
    return (
        <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:mt-4 sm:gap-2">
            {categories.map((category) => (
                <Link
                    key={category.id}
                    href={`/category/${category.id}`}
                    className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-[10px] font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 sm:gap-1.5 sm:px-3 sm:py-2 sm:text-xs md:text-sm"
                >
                    <span>{category.icon}</span>
                    <span>{category.nameBn}</span>
                </Link>
            ))}
        </div>
    );
};

export default NavLinks;