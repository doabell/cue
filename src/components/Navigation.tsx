import DarkModeToggle from "./DarkModeToggle";
import type { SerializedSeriesInfo } from "@/lib/types";

interface NavigationProps {
    projects: SerializedSeriesInfo[];
    currentSlug?: string;
}

export default function Navigation({ projects, currentSlug }: NavigationProps) {
    return (
        <header className="site-header">
            <nav className="nav-inner" aria-label="Primary navigation">
                <a href="/" className="wordmark" aria-label="CUE! home">
                    CUE<span aria-hidden="true">!</span>
                </a>

                <div className="project-nav" aria-label="Projects">
                    {projects.map((project) => (
                        <a
                            key={project.slug}
                            href={`/${project.slug}`}
                            className={`project-nav-link${currentSlug === project.slug ? " is-active" : ""}`}
                            aria-current={
                                currentSlug === project.slug
                                    ? "page"
                                    : undefined
                            }
                        >
                            {project.short}
                        </a>
                    ))}
                </div>

                <div className="nav-actions">
                    <a
                        href="https://github.com/doabell/cue"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                    >
                        Source <span aria-hidden="true">↗</span>
                    </a>
                    <DarkModeToggle />
                </div>
            </nav>
        </header>
    );
}
