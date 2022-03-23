import React from "react";
import navbarStyle from "@/styles/HomeNavbar.module.css";
import Image from "next/image";
import Link from "next/link";
import useGetCurrentPage from "@/components/utils/useGetCurrentPage";

const HomeNavbar = () => {
	const { currentURL } = useGetCurrentPage();

	const activeLink = (currentLink) => {
		if (currentURL === currentLink)
			return {
				fontWeight: 700,
			};
	};

	return (
		<nav className={navbarStyle.navbar}>
			<Link href={"/"}>
				<div className={navbarStyle.logo}>
					<Image src='/stats.svg' height={35} width={40} />{" "}
					<span>
						<h3>I/A Statistics</h3>
					</span>
				</div>
			</Link>
			<div className={navbarStyle.links}>
				<ul>
					<li style={activeLink("/")}>
						<Link href={"/"}>Beranda</Link>
					</li>
					<li style={activeLink("/perihal")}>
						<Link href={"/perihal"}>Perihal</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

// .links a {
// 	padding: 1rem 1rem;
// }

export default HomeNavbar;
