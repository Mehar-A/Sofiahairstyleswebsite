import { User } from '../../models/user';

export const seedAdmin = async (): Promise<void> => {
  const user = await User.findOne({ name: 'Sofia' });
  if (!user) {
    const sofia = new User({ name: 'Sofia', password: 'test' });
    await sofia.save();
  }
};
