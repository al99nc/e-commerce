-- CreateTable
CREATE TABLE "social_profiles" (
    "user_id" TEXT NOT NULL,

    CONSTRAINT "social_profiles_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "social_profiles" ADD CONSTRAINT "social_profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
