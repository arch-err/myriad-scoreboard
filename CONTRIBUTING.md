# How to Register Team Scores

There are two ways to submit CTF scores to the Myriad Dashboard.

## Option 1: Pull Request (Recommended)

This is the preferred method for team members who have GitHub access.

### Adding a New CTF Result

1. **[Fork the repository](https://github.com/arch-err/myriad-dashboard/fork)** (if you don't have write access)

2. **Create or edit a CTF file** in the `ctfs/` directory

   File naming: `ctfs/<ctf-slug>.yaml` (e.g., `ctfs/picoctf-2024.yaml`)

3. **Use this format:**

   ```yaml
   name: picoCTF 2024
   date: 2024-03-15
   url: https://picoctf.org    # optional
   results:
     - team: Myriad Alpha
       rank: 15
       points: 4500
     - team: Myriad Beta
       rank: 42
       points: 3200
   ```

4. **Submit a Pull Request** with your changes

### Adding a New Team

If your team isn't registered yet, edit `teams/teams.yaml`:

```yaml
teams:
  - id: your-team-id
    name: Your Team Name
    members:
      - member1
      - member2
```

## Option 2: Issue Request

For those without GitHub access or who prefer not to make direct edits.

1. Go to [New Issue](../../issues/new?template=score-request.yaml)
2. Fill out the score request form
3. An admin will review and add your score

### Required Information

- **CTF Name**: Full name of the competition
- **CTF Date**: When the CTF ended (YYYY-MM-DD)
- **Team Name**: Must match an existing team name exactly
- **Final Rank**: Your team's final placement
- **Points**: Total points scored

### Optional Information

- **CTF URL**: Link to the CTF website
- **Proof**: Screenshot or link to official results

## Score Calculation

The overall leaderboard uses **relative internal placement**:

- For each CTF, teams are ranked by their CTF placement
- Score = (internal rank) / (total internal teams in that CTF)
- Lower average score = better overall ranking

**Example:**
- CTF has 3 internal teams participating
- Team A places best → internal rank 1 → score 1/3 = 0.333
- Team B places second → internal rank 2 → score 2/3 = 0.667
- Team C places third → internal rank 3 → score 3/3 = 1.000

## Questions?

Open an issue or contact a dashboard admin.
