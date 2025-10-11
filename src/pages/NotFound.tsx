import { Button } from "@/components/ui/button";
import useDocumentTitle from "@/hooks/ui/useDocumentTitle";
import { Link , useNavigate} from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  useDocumentTitle("  صفحه مورد نظر یافت نشد");

  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md space-y-6">
        {/* 404 Icon */}
        <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-muted">
          <svg
            aria-hidden="true"
            className="size-12 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>صفحه یافت نشد</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        {/* Error Title */}
        <div className="space-y-2">
          <h1 className="font-bold text-4xl text-foreground">۴۰۴</h1>
          <h2 className="font-semibold text-foreground text-xl">
            صفحه مورد نظر یافت نشد
          </h2>
          <p className="text-muted-foreground">
            متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild className="w-full sm:w-auto">
            <Link to="/">بازگشت به صفحه اصلی</Link>
          </Button>
          <Button
            className="w-full sm:w-auto"
            onClick={() => navigate(-1)}
            variant="outline"
          >
            بازگشت به صفحه قبل
          </Button>
        </div>

        {/* Help Text */}
        <div className="pt-4 text-center">
          <p className="text-muted-foreground text-xs">
            اگر فکر می‌کنید این یک خطا است، لطفا با تیم پشتیبانی تماس بگیرید.
          </p>
        </div>
      </div>
    </div>
  );
}
