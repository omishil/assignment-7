export default function Loading() {
  return (
    <main className="homepage-loading" aria-label="Loading homepage">
      <div className="navbar-skeleton">
        <div className="skeleton logo-skeleton" />
        <div className="skeleton nav-links-skeleton" />
        <div className="skeleton nav-button-skeleton" />
      </div>

      <div className="banner-skeleton">
        <div className="skeleton banner-title-skeleton" />
        <div className="skeleton banner-text-skeleton" />
        <div className="skeleton banner-button-skeleton" />
      </div>
    </main>
  );
}