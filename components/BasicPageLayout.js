import React from "react";
import { useLanguage } from "./LanguageProvider";
import Link from "next/link"; 
import { useRouter } from "next/router";

/**
 * @param {object} param0
 * @param {string} param0.title the main title of this layout
 * @param {string} param0.preTitle a small text that will be located above the title
 * @param {boolean} param0.showLogo a small text that will be located above the title
 *
 * @returns {React.ReactElement}
 */
export default function BasicPageLayout({
	title,
	preTitle,
	children,
	showLogo,
}) {
	const dictionary = useLanguage();
	const router = useRouter();

	return (
		<div className="container mx-auto ">
			<div className="bg-slate-50">
				<div className="container mx-auto px-12  ">
					<div className="max-w-7xl mx-auto p-14 sm:px-6 lg:px-8">
						<div className="  p-10 bg-white shadow-lg relative">
							<div className="text-right text-sm">
								{dictionary.systemLanguages.map(({ iso, name, isSelected }) => (
									<span
										key={iso}
										className={
											"mx p-2 " +
											(isSelected ? " bg-slate-200 rounded font-bold" : "")
										}
									>
										<Link href={dictionary.switchLang(iso)}>{name}</Link>
									</span>
								))}
							</div>

							<div className="text-center">
								<h2 className=" text-xs text-indigo-600 font-semibold  uppercase">
									{preTitle}
								</h2>

								{showLogo ? (
									<img
										src={router.basePath + "/logo.svg"}
										width={400}
										height={200}
                                        title={title}
                                        style={{display:"block", margin:"0 auto"}}
									/>
								) : (
									<p className="mt-2 mb-10 text-3xl font-extrabold tracking-tight text-gray-900  ">
										{title}
									</p>
								)}
							</div>

							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
