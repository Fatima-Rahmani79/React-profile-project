import TopHeader from "./topHeader";
import StatCard from "./statCard";
import PersonalInfoCard from "./PersonalInfoCard";
import AccountDetailsCard from "./AccountDetailsCard";

export default function ProfilePage({ user }) {
    return (
      <div className="layout">
        <TopHeader
          name={user.name}
          username={user.username}
          avatarImage={user.avatarImage}
        ></TopHeader>

        <div className="statsGrid">
          <StatCard
            title="XP"
            bigValue={user.xp}
            textFooter={`Last Active: ${user.lastActive}`}
          ></StatCard>
          <StatCard
            title="STREAK"
            bigValue={`${user.strakDays} days`}
            textFooter={`Longest Streak: ${user.longestStrakDays} days`}
            icon="🔥"
          ></StatCard>
          <StatCard
            title="RECENT BADGES"
            bigValue=""
            textFooter={user.recentBadgesText}
            icon="🏆"
          ></StatCard>
        </div>

        <div className="bottomGrid">
          <PersonalInfoCard info={user.personalInfo}></PersonalInfoCard>
          <AccountDetailsCard
            details={user.accountDetails}
          ></AccountDetailsCard>
        </div>
      </div>
    );
}