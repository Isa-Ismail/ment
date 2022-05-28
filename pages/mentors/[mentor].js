import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import Mentor from "../../components/Mentors/Mentor/Mentor";

export default function MentorPage() {
  const router = useRouter();
  const { mentor } = router.query;
  return (
    <Layout>
      <Mentor mentorSlug={mentor} />
    </Layout>
  );
}
